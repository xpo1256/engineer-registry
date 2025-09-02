const request = require("supertest")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app.js")
const Engineer = require("../models/engineer.js")

const server = app.listen(8080, () => {
  console.log("Testing engineer routes on port 8080")
})

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.connection.close()
  await mongoServer.stop()
  server.close()
})

describe("Test the engineers endpoints", () => {

  test("It should create a new engineer", async () => {
    const response = await request(app).post("/engineers").send({
      name: "ahmed",
      specialty: "Software",
      yearsExperience: 5,
      available: true,
    })
    expect(response.statusCode).toBe(302) 
    const engineer = await Engineer.find({})
    expect(engineer.length).toBe(1)
    expect(engineer[0].name).toBe("ahmed")
  })

  test("It should update an engineer", async () => {
    const engineer = await Engineer.create({
      name: "mohd",
      specialty: "Electrical",
      yearsExperience: 3,
      available: true,
    })
    const response = await request(app)
      .put(`/engineers/${engineer._id}?_method=PUT`)
      .send({
        name: "mohammed",
        specialty: "Electrical",
        yearsExperience: 7,
        available: "on",
      })
    expect(response.statusCode).toBe(302) 
    const updated = await Engineer.findById(engineer._id)
    expect(updated.name).toBe("mohammed")
    expect(updated.yearsExperience).toBe(7)
  })

  test("It should delete an engineer", async () => {
    const engineer = await Engineer.create({
      name: "ayman",
      specialty: "Mechanical",
      yearsExperience: 8,
      available: true,
    })
    const response = await request(app)
      .delete(`/engineers/${engineer._id}?_method=DELETE`)
      .send()
    expect(response.statusCode).toBe(302) 
    const deleted = await Engineer.findById(engineer._id)
    expect(deleted).toBeNull()
  })
})