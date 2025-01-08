import modules from "../lib/modules"
import { Module } from "../types/modules"

test('should expect true all time', () => {
    const data: Module = {
        data: "name"
    }
    expect(modules("name")).toStrictEqual(data)
})