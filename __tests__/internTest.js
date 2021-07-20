const Intern = require("../lib/intern");

test("verify employee school", () => {
	const school = "education";
	const intern = new Intern(1, "sandle", "grandle@email.com", school);

	expect(intern.school).toEqual(expect.any(String));
	expect(intern.getSchool()).toBe(school);
});
