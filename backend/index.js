const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env['OPENAI_API_KEY'],
});

const openai = new OpenAIApi(config);

//setup Server

const app = express();
const PORT = process.env.PORT || 5001;

function parseCityInfo(generatedInfo) {
    const cityInfo = {
      name: '',
      country: '',
      population: '',
      currency: '',
      land_area: '',
      coordinates: { lat: '', lng: '' }
    };
  
    const lines = generatedInfo.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('City:')) {
        cityInfo.name = line.split('City:')[1].trim();
      } else if (line.startsWith('Country:')) {
        cityInfo.country = line.split('Country:')[1].trim();
      } else if (line.startsWith('Population:')) {
        cityInfo.population = line.split('Population:')[1].trim();
      } else if (line.startsWith('Currency:')) {
        cityInfo.currency = line.split('Currency:')[1].trim();
      } else if (line.startsWith('Land area:')) {
        cityInfo.land_area = line.split('Land area:')[1].trim();
      } else if (line.startsWith('Coordinates:')) {
        let coordinates = line.split('Coordinates:')[1].trim();
        let [lat, lng] = coordinates.split(',');
        if(!lng) [lat, lng] = coordinates.split(' ');
        cityInfo.coordinates.lat = lat.trim();
        cityInfo.coordinates.lng = lng.trim();
      }
    });
  
    // if (
    //   !cityInfo.name ||
    //   (!cityInfo.country &&
    //     !cityInfo.population &&
    //     !cityInfo.currency &&
    //     !cityInfo.land_area)
    // ) {
    //   return generatedInfo;
    // }
  
    return cityInfo;
  }
  

app.use(bodyParser.json());
app.use(cors());

app.post('/getCityInfo', async (req, res) => {
  const { city } = req.body;

  const prompt = `Generate information about ${city}.
    City: ${city}
    Country:
    Population:
    Currency:
    Land area:
    Coordinates:
    `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    max_tokens: 150,
    prompt: prompt,
  });

  try {
    console.log(response.data.choices[0].text)
    const cityInfo = parseCityInfo(response.data.choices[0].text)

    if(!cityInfo.country || !cityInfo.population) res.json({valid: false, text: `${city} does not exist so there is no complete information available.`})
    else res.json({ valid: true, text: `Here is the information of ${city}`, cityInfo: cityInfo });
  } catch (error) {
    console.log(error)
    res.json({ valid: false, text: response.data.choices[0].text });
  }

  //   res.json({ valid: true, text: 'here is the information of cali', cityInfo: response });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
