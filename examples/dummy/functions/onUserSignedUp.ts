export default async function (event) {
  const user: any = event.payload
  console.log(`${user.displayName} has recently signed up. Sending an email to ${user.email}.`)
  return {
    send: [{
      server: 'websockets',
      payload: event.payload,
    }]
  }
}
