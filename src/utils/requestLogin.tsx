/**
 * Fake function representing hitting a server,
 * validating a username and password,
 * and returning a "token"
 */
export function requestLogin(
  username: string,
  password: string
): Promise<number> {
  const WAIT_TIME = 2000;

  return new Promise((resolve, reject) => {
    // Resolve after 2 seconds, to simulate latency
    setTimeout(() => {
      if (username === "bbqLover67" && password === "MemphisStyleFTW5467") {
        // Generates a random number to represent a user's token
        const totallyValidUserToken = Math.floor(
          Math.random() * Math.floor(1000000)
        );
        resolve(totallyValidUserToken);
      } else {
        resolve();
      }
    }, WAIT_TIME);
  });
}
