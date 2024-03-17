import { $ } from '@wdio/globals'

class  Profilepage {
    async ProfileName(name){
        return await $(`//android.widget.TextView[@text="${name}`)
    }


}

export default new Profilepage();