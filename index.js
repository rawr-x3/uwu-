const Discord = require(`discord.js`);
const client = new Discord.Client();


client.once(`ready`, () => {
    console.log(`Welcome Back Mastew Istewix and Gawwison, I Hope You Had A Gweat Day and Fixed Me :3`);

});

client.login(`AAAAAAAAAAAAAAAAAAAAAAAAAAAA_NOOOOO_HACKINGGGGGGGGGGGG`)
client.on(`message`, message => {
    if (message.content === `uwu`) {
        //send back "uwa" to the channel the message was sent in
        message.channel.send(`uwa!!`);
    }
})

client.on(`message`, message => {
    if (client.user.id === message.author.id) { return }
    if (message.content === `i didnt ask`) {
        //send back "i didnt ask for you to ask if they asked" to the channel the message was sent in
        message.channel.send(`I didnt ask for you to ask if they asked, did i?`);
    }

    if (message.content === `didnt ask`) {
        //send back "i didnt ask for your existence" to the channel the message was sent in
        message.channel.send(`I didnt ask for your existence`);

    }

    if (message.content === `nobody asked`) {
        //send back "nobody asked for you to come out of the womb" to the channel the message was sent in
        message.channel.send(`nobody asked for you to come out of the womb`);

    }

    if (message.content.includes("owo")) {
        //send back "owo whats this" to the channel the message was sent in
        message.channel.send(`owo whats this`);
    }

    if (message.content.includes("uwu") && message.content !== "uwu") {
        //send back "uwu whats this" to the channel the message was sent in
        message.channel.send(`uwu whats this`);
    }
})

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;

    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
        // Assuming we mention someone in the message, this will return the user
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
                /**
                 * Kick the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 */
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        // We let the message author know we were able to kick the person
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to kick the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to kick the member');
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
            // Otherwise, if no user was mentioned
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
});

// Log bot in using the token from https://discordapp.com/developers/applications/me
client.login('your token here');

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;

    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
        // Assuming we mention someone in the message, this will return the user
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
                /**
                 * Ban the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 * Read more about what ban options there are over at
                 */
                member
                    .ban({
                        reason: 'They were bad!',
                    })
                    .then(() => {
                        // We let the message author know we were able to ban the person
                        message.reply(`Successfully banned ${user.tag}`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to ban the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to ban the member');
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
        } else {
            // Otherwise, if no user was mentioned
            message.reply("You didn't mention the user to ban!");
        }
    }
});

// Log the bot in using the token from https://discordapp.com/developers/applications/me
client.login('your token here');



//osu! commands and API is down below
async function fetching(type, user) {
    url = "https://osu.ppy.sh/api/" + type + user + "&k=" + "No bitch"
    console.log(url)
    response = await fetch(url)
    json = await response.json()
    return json

}
async function recent(message) {
    data = await fetching("get_user_recent?u=", "15552380")
    beatmap = await fetching('get_beatmaps?b=', data[0].beatmap_id)
    console.log(beatmap)
    const embed = new Discord.MessageEmbed()
        .setTitle(beatmap[0].artist + " - " + beatmap[0].title)
        .setColor(0xff0000)
        .setDescription(data[0].date)
        .setThumbnail('https://b.ppy.sh/thumb/' + beatmap[0].beatmapset_id + 'l.jpg')
        .setURL('https://osu.ppy.sh/beatmaps/' + beatmap[0].beatmap_id)
    message.channel.send(embed)

}
client.on('message', message => {
    if (message.content.startsWith("!recent")) {
        recent(message)
    }
})