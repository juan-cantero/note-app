const yargs = require('yargs');
const note = require('./note.js');
const log = console.log;

yargs.command({
    command: 'remove',
    describe: 'removes notes',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },

    handler: (argv) => note.removeNote(argv.title)
});

yargs.command({
    command: 'add',
    describe: 'add notes',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => note.addNote(argv.title, argv.body)
});

yargs.command({
    command: 'list',
    describe: 'lists notes',
    handler: () => note.listNotes()
});

yargs.command({
    command: 'read',
    describe: 'reads notes',
    builder: {
        title: {
            describe: "note title",
            demand: true,
            type: "string"
        }
    },
    handler: (argv) => note.readNote(argv.title)
});

// you do need to call parse in order for it to works
yargs.parse();