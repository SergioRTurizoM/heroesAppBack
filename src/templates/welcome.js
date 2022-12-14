const welcomeTemplate = (username) => `
  <!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
  <style>
    table,
    td,
    div,
    h1,
    p {
      font-family: SF Pro Display, sans-serif;
    }
  </style>
</head>

<body style="padding: 0; margin: 0; width: 100%">
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation"
          style="width:100%;max-width:640px;border-collapse:collapse;border-spacing:0;text-align:left;background:#f9f8fa;">
          <tr>
            <td style="padding:4%;">
              <!--Header-->
              <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;text-align:left;">
                <tr>
                  <td style="padding:0">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;">
                      <tr>
                        <td style="padding:0;width:50%;" align="left">
             
                        </td>
                        <td style="padding: 0; width: 50%" align="right">
                        
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Spacer 25px-->
                <tr>
                  <td style="padding:13px 0;"></td>
                </tr>
                <!-- Main content-->
                <tr style="border-radius:10px">
                  <td style="background:#ffffff;border-radius:10px;padding:24px 4%;">
                    <table>
                      <tr>
                        <td>
                        
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            <b>Hola ${username}</b>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            Gracias por darme la oportunidad de participar en este proceso!
                          </p>
                          <p
                          style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                          Desarroll?? esta aplicaci??n con NodeJS en el Back-end y con Angular en el front-end
                        </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                          <p>Atentamente, <br />Sergio Turizo</p>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:15.5px 0;">
                      </tr>
                      <tr>
                        <td>
                          <table style="width:100%">
                            <tr>
                              <td
                                style="width:60%;text-align:center;background:#ed6b2c;padding:15px 20px 15px 20px;border-radius:12px;">
                                <a href="https://www.linkedin.com/in/sergioraulturizo/"
                                  style="text-decoration: none;color:#ffffff;font-weight: 600;font-size: 18px;">Ir a
                                  mi LinkedIn</a>
                              </td>
                              <td style="width:30%;">
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!--Spacer -->
                <tr>
                  <td style="padding:16px 0;"></td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td>
    
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Cualquier comentarios y/o feedback puedes
                      enviarmelo respondiendo a este correo, te lo agradecer??a mucho ????.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>`;

module.exports = welcomeTemplate;
