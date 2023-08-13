import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"

type ProjectDetailModalProps = {
  projectSelected: any
  visible: boolean
  closeDialog: () => void
}
const ProjectDetailModal = ({ projectSelected, visible, closeDialog }: ProjectDetailModalProps) => {
  const handleOpenLink = (link: string) => {
    window.open(link, "__blank")
  }
  return (
    <Dialog
      dismissableMask={true}
      draggable={false}
      header={projectSelected?.title}
      visible={visible}
      className="w-full lg:w-1/2"
      onHide={() => closeDialog()}
    >
      <p className="mx-0 my-4">{projectSelected?.description}</p>
      <h2 className="text-xl font-bold my-2">Technologies</h2>
      <ul className="list-disc mx-6">
        {projectSelected?.technologies.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold my-2">Repositories</h2>
      <div className="flex gap-4">
        {projectSelected?.repositories.map((item: any) => (
          <Button
            key={item.id}
            icon="pi pi-github"
            label={item.label}
            onClick={() => handleOpenLink(item.url)}
            outlined
          />
        ))}
      </div>

      <h2 className="text-xl font-bold my-2">Screenshots</h2>
      <div className="flex gap-4 flex-col">
        {projectSelected?.screenshots.map((item: any) => (
          <img key={item.id} src={item.url} />
        ))}
      </div>
    </Dialog>
  )
}

export default ProjectDetailModal
