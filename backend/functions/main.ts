import addLolly from './addLolly'
import getLollies from './getLollies'
import Lolly from './Lolly';


type AppSyncEvent = {
    info: {
        fieldName: string
    },
    arguments: {
        lolly: Lolly
    }
}

exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "addLolly":
            return await addLolly(event.arguments.lolly);
        case "getLollies":
            return await getLollies();
        default:
            return null;
    }
}
