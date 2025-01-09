import modules from "../lib/index"

test('should expect true all time', () => {
    expect(modules).toStrictEqual({ data: "done" })
})
