export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48535e8b29msh67190cf25125a71p169059jsna5a7e17d3b59',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}