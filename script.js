console.log("Wow");
// fetch("https://owen-wilson-wow-api.onrender.com/wows/random")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(typeof data);
// 	});

const makeAPICall = async () => {
  const response = await fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/random"
  );
  const data
  console.log(response);
};

makeAPICall();
