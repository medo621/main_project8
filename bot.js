const Discord = require('discord.js');
const myid = ['445308978776506368'];
const prefix = ['$'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();



client.login(process.env.T);
client2.login(process.env.T2);
client3.login(process.env.T3);
client4.login(process.env.T4);
client5.login(process.env.T5);


client.on('message', message => {
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c1'){
message.channel.send('#credits')
  }
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c2'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c3'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c4'){
message.channel.send('#credits')
  }
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c5'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client.on("ready", () => {
let channel =     client.channels.get("733244541129457705")
setInterval(function() {
channel.send(`الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال`);
}, 30)
})

client2.on("ready", () => {
let channel =     client2.channels.get("733244541129457705")
setInterval(function() {
channel.send(`الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال`);
}, 30)
})

client3.on("ready", () => {
let channel =     client3.channels.get("733244541129457705")
setInterval(function() {
channel.send(`الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال`);
}, 30)
})

client4.on("ready", () => {
let channel =     client4.channels.get("733244541129457705")
setInterval(function() {
channel.send(`الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال`);
}, 30)
})

client5.on("ready", () => {
let channel =     client5.channels.get("733244541129457705")
setInterval(function() {
channel.send(`الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال الحمدلله علي كل حال`);
}, 30)
})



