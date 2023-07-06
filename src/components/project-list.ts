/// <reference path="base-component.ts" />

namespace App {
  // ProjectList Class
  export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements Dragtarget {
    assignedProjects: Project[];

    constructor(private type: "active" | "finished") {
      super("project-list", "app", false, `${type}-projects`);
      this.assignedProjects = [];

      this.configure();
      this.renderContent();
    }

    @autobind
    dragOverHandler(event: DragEvent): void {
      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        const listEl = this.element.querySelector("ul")!;
        listEl.classList.add("droppable");
      }
    }

    @autobind
    dropHandler(event: DragEvent): void {
      const prjId = event.dataTransfer!.getData("text/plain");
      projectState.moveProject(prjId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finish);
    }

    @autobind
    dragLeaveHandler(_: DragEvent): void {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.remove("droppable");
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("drop", this.dropHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);

      projectState.addListener((projects: Project[]) => {
        const relevantProject = projects.filter(prj => {
          if (this.type === "active") {
            return prj.status === ProjectStatus.Active;
          }
          return prj.status === ProjectStatus.Finish;
        })
        this.assignedProjects = relevantProject;
        this.renderProjects();
      });
    }

    renderContent() {
      const listId = `${this.type}-projects-list`;
      this.element.querySelector("ul")!.id = listId;
      this.element.querySelector("h2")!.textContent = this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
    }

    private renderProjects() {
      const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
      listEl.innerHTML = "";
      this.assignedProjects.forEach((prjItem) => {
        new ProjectItem(listEl.id, prjItem);
      })
    }
  }
}