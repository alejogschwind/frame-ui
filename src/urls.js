const generateURL = (section, url, language) => {
  const BASE_URL = "https://www.frame.com.ar/dbfeed/json.php";

  let urlGenerated = BASE_URL + `?seccion=${section}`;

  if (url) {
    urlGenerated = urlGenerated + `&url=${url}`;
  }
  if (language) {
    urlGenerated = urlGenerated + `&idioma=${language}`;
  }

  return urlGenerated;
};

export default generateURL;