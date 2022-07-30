import { useEffect, useState } from "react";
import validator from "validator";
import "./ProNav.css";
import Context from "../../Context";
export default function ProNav(props) {
  const [name, setName] = useState("");
  const [username, setUName] = useState(props.username);
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [editp, setEidit] = useState(false);
  const [cdp, setDp] = useState(false);
  const [displayPictureURI, setdisplayPictureURI] = useState("");
  useEffect(() => {
    try {
      const url = `${Context().backendURL}/user/${username}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setName(json.profile.name);
          setBio(json.profile.bio);
          setEmail(json.profile.email);
          setdisplayPictureURI(json.profile.displayPictureURI);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
  }
  const actions = (req, event) => {
    event.preventDefault();
    if (req === 1) {
      setName(event.target.value);
    }
    if (req === 2) {
      setUName(event.target.value);
    }
    if (req === 3) {
      setEmail(event.target.value);
    }
    if (req === 4) {
      setBio(event.target.value);
    }
  };
  function handleChange(event) {
    setDp(event.target.value);
  }

  function handleSubmit1(event) {
    event.preventDefault();
  }

  return (
    <div
      className="float-container"
      style={{
        position: "sticky",
        top: "10rem",
        flex: "0.3",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        alt ="Profile Pic"
        className="image"
        style={{ objectFit: "cover" }}
        src={
          displayPictureURI === null
            ? "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            : displayPictureURI
        }
      ></img>
      {cdp === true && (
        <div className="float-child">
          <form onSubmit={handleSubmit1}>
            <label>
              Image Url:
              <input
                type="text"
                value={displayPictureURI}
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      {editp === false && (
        <div className="float-child">
          <h4 className="bc">{name}</h4>
          <p className="">{bio}</p>
        </div>
      )}

      {editp === true && (
        <div className="float-child">
          <form onSubmit={(e) => handleSubmit(e)}>
            <table>
              <tr>
                <td className="bc2">Name: </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => actions(1, e)}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td className="bc2">User Name: </td>
                <td>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => actions(2, e)}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td className="bc2">Email: </td>
                <td>
                  <input
                    id="1e"
                    type="text"
                    validator="isEmail"
                    required
                    value={email}
                    onChange={(e) => actions(3, e)}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td className="bc2">Bio: </td>
                <td>
                  <input
                    required
                    type="text"
                    value={bio}
                    onChange={(e) => actions(4, e)}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td></td>{" "}
                <td>
                  <input className="bc" type="submit" value="Update Profile" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      )}
    </div>
  );
}
