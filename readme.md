# Quotes API Documentation

Welcome to the **Quotes API**! 🎉 This API serves up free, random quotes to inspire, motivate, or just give you a chuckle. Perfect for your apps, websites, or whenever you need that extra push. 💪


## Base URL

```plaintext
https://quotes-api-prtk.onrender.com
```

## Endpoints

### Get a Random Quote

**Endpoint:**

```http
GET /quote
```

**Description:**

Fetches a random quote from the collection.

**Response:**

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`
- **Body:**

  ```json
  {
    "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "Albert Einstein"
  }
  ```

**Example Request:**

```bash
curl -X GET https://quotes-api-prtk.onrender.com/quote
```

**Example Response:**

```json
{
  "quote": "The unexamined life is not worth living... but the over-examined life is exhausting.",
  "author": "Socrates"
}
```

## Error Handling

If something goes sideways, you'll get a response like this:

- **Status Code:** `500 Internal Server Error`
- **Content-Type:** `application/json`
- **Body:**

  ```json
  {
    "error": "Failed to fetch the quote. Please try again later."
  }
  ```

## Usage Limits

No rate limits here! 🎉 Feel free to hit the endpoint as much as you need. But hey, play nice and don't abuse the service. 😉

## Integration Examples

### JavaScript (Fetch API)

```javascript
fetch('https://quotes-api-prtk.onrender.com/quote')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.quote} — ${data.author}`);
  })
  .catch(error => console.error('Error fetching quote:', error));
```

### Python (Requests)

```python
import requests

response = requests.get('https://quotes-api-prtk.onrender.com/quote')
if response.status_code == 200:
    data = response.json()
    print(f"{data['quote']} — {data['author']}")
else:
    print('Error fetching quote')
```

## Feedback and Contributions

Got ideas or found a bug? Open an issue or submit a pull request on our GitHub repo. Let's make this API even more awesome together! 🤝

---

Now go forth and integrate some wisdom into your projects! And remember, with great power comes great responsibility... and the occasional need for caffeine. ☕
