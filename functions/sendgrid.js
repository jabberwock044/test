const client = require('@sendgrid/mail')

const key = process.env.KEY
const sendemail = process.env.sendemail
const toemail = process.env.toemail


exports.handler =  async (event, context, callback) => {

  client.setApiKey(key)
  const payload = JSON.parse(event.body);
  const { email, subject } = payload

  console.log(email)

  const data = {
      from: {
          email: sendemail,
          name: '竹本'
      },
      subject: test,
      to: toemail,
      html: 'test1',
  };

  try{
      await client.send(data)
      
      return {
          statusCode: 200,
          body: email
      }
  } catch(e){
      return {
          statusCode: e.code,
          body: e.message
      }
  }
};