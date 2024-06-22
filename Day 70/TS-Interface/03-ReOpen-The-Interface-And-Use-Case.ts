/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

// Homepage interface Declaration
interface Setting{
    readonly them: string;
    frame: boolean;
}

//Article page interface reopen
interface Setting{
    sidebar: string;
    front:boolean;
}

//contant page interface reopen
interface Setting{
    external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
const userSetting:Setting = {
    them: "open san's",
    frame: true,
    sidebar: "Close",
    front: false,
    external: true
}

console.log(userSetting);
