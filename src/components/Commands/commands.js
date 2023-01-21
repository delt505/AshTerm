/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\ni have been a student at Bosque School since the 6th grade and set to graduate in 2025.\nI have been awarded the honor of membership to thespian troupe 7148\nfor more info just click the button at the top\n---\n"
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    Giveing adaptive tahught to...\n---\n
                    EOS family of consoles.
                    NDI 5.
                    Basic audio mixing.
                    Basic networking.
                `
            }
        },
        shows: {
            description: 'shows I have worked on.',
            usage: 'shows',
            fn: () => {
                return `
                    just click the button at the top. i am lazy`
            }
        }
    },
    overwrites:{
        lights: {
            description: 'List all available commands',
            usage: 'lights',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
