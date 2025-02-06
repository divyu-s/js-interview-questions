const input = document.createElement("input");

const state = { value: "Hi" };

model(state, input);

console.log(input.value); // "Hi"
state.value = "dev";
console.log(input.value); // "dev"
input.value = "engineerchirag";

input.dispatchEvent(new Event("change"));

console.log(state.value); // "engineerchirag"

function model(state, input) {
  input.value = state.value;

  Object.defineProperty(state, "value", {
    get() {
      return input.value;
    },
    set(value) {
      input.value = value;
      return;
    },
  });

  input.addEventListener("change", (e) => {
    state.value = e.target.value;
  });
}
