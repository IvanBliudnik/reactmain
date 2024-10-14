import {reducer, StateType, Toggle_collapsed} from "./reducer";

test("reducer should be true", () => {
    //data
    const state: StateType = {
        collapsed: false,
    }
    //action
    const newState = reducer(state, {type: Toggle_collapsed})
    //epection
    expect(newState.collapsed).toBe(true);
})
test("reducer should be false", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    const newState = reducer(state, {type: Toggle_collapsed})
    //epection
    expect(newState.collapsed).toBe(false);
})
test("reducer should throw error", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    expect(()=>{reducer(state, {type: "Fake"})}).toThrowError();
})