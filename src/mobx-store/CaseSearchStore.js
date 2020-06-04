import { decorate, observable, action, computed } from "mobx";

class CaseSearchStore {

    userSearchInput = '';
    caseScores = '';

    setUserSearchInput = (e) => {
        console.log('setting: ' + e);
        this.userSearchInput = e;
    }
    setCaseScores = (e) => {
        this.caseScores = e;
    }

    get getUserSearchInput() {
        console.log(this.userSearchInput);
        return this.userSearchInput;
    }
    get getCaseScores() {
        return this.caseScores;
    }

    CaseSearchStore = decorate(CaseSearchStore, {
        userSearchInput: observable,
        caseScores: observable,
        setUserSearchInput: action,
        setCaseScores: action,
        getUserSearchInput: computed,
        getCaseScores: computed,
    });

}

export { CaseSearchStore };