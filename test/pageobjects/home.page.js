import { $ } from '@wdio/globals'

class  Homepage extends Page {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }

}

export default new Homepage();