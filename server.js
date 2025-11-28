const http = require("http");
const PORT = process.env.PORT || 3000;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emmanuel M. Alo - Personal Profile</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #e0f2fe 0%, #ddd6fe 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      padding: 40px;
      max-width: 500px;
      width: 100%;
      text-align: center;
      animation: slideIn 0.6s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h1 {
      font-size: 2.5rem;
      color: #1e293b;
      margin-bottom: 12px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .class-section {
      font-size: 1.25rem;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 32px;
      letter-spacing: 0.5px;
    }

    .quotation {
      font-size: 1rem;
      color: #475569;
      font-style: italic;
      font-weight: 300;
      line-height: 1.6;
      border-left: 4px solid #a78bfa;
      padding-left: 20px;
      margin-left: 0;
    }

    @media (max-width: 600px) {
      .card {
        padding: 30px 20px;
      }

      h1 {
        font-size: 2rem;
      }

      .class-section {
        font-size: 1.1rem;
      }

      .quotation {
        font-size: 0.95rem;
      }
    }

    @media (max-width: 400px) {
      .card {
        padding: 24px 16px;
      }

      h1 {
        font-size: 1.75rem;
      }

      .class-section {
        font-size: 1rem;
      }

      .quotation {
        font-size: 0.9rem;
        border-left-width: 3px;
        padding-left: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Emmanuel M. Alo</h1>
    <p class="class-section">IT - NT 4101</p>
    <p class="quotation">"Either increase your sacrifice, or reduce desire"</p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(htmlContent);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

