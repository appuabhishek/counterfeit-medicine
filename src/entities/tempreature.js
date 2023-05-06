import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
function FetchAPI() {
  const [data, setData] = useState([]);

  //Get Method
  const apiGet = () => {
    fetch(
      "https://api.thingspeak.com/channels/2103469/feeds.json?api_key=RHJQPIX3087IURXE&results=1"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={apiGet}>
        Get Temperature
      </Button>
      <pre>{JSON.stringify(data.feeds, null, 2)}</pre>
    </div>
  );
}

export { FetchAPI };
