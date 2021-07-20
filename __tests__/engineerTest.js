const Engineer = require("../lib/Engineer");

test("check github", () => {
	const github = "awildgithubapproaches";
	const engineer = new Engineer(1, "ramble", "damble@email.com", github);

	expect(engineer.github).toEqual(expect.any(String));
	expect(engineer.getGitHub()).toBe(github);
});
