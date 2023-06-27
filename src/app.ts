class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;
  constructor() {
    this.templateElement = document.querySelector("#project-input")!;
    this.hostElement = document.querySelector("#app")!;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"

    this.titleInputElement = this.element.querySelector("#title");
    this.descriptionInputElement = this.element.querySelector("#description");
    this.mandayInputElement = this.element.querySelector("#manday");

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this))
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
const prjInput = new ProjectInput();