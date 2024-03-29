import { BASE_URL } from "@env";

const base_url = BASE_URL;

export async function getLeagues(accessToken: String) {
  try {
    const reqOptions = {
      method: "Get",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    const response = await fetch(base_url + "/leagues", reqOptions);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

export async function getLeagueStandings(
  accessToken: String,
  league_key: String
) {
  try {
    const reqOptions = {
      method: "Get",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    const response = await fetch(
      `${base_url}/league/${league_key}/standings`,
      reqOptions
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}
