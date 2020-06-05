import { decorate, observable, action, computed, runInAction } from "mobx";

class CaseSearchStore {

    userSearchInput = '';
    caseScores = '';

    setUserSearchInput = (e) => {
        this.userSearchInput = e;
    }
    setCaseScores = (e) => {
        console.log('setting: ' + e);
        this.caseScores = e;
    }

    get getUserSearchInput() {
        console.log(this.userSearchInput);
        return this.userSearchInput;
    }
    get getCaseScores() {
        console.log('getting: ' + this.caseScores)
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