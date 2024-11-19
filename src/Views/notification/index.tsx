import { NotificationComponent } from "../../components/notificattionComponet";

export function Notification() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
          <NotificationComponent title="Confirme o contrato com o David" message="David mandou o contrato assine para aceitar" linkURL="/contract/1"/>
          <NotificationComponent title="Mayk aceitou seu orçamento!!" message="Faça o contrato, para o trabalho com mayk." linkURL="/contract/"/>
          <NotificationComponent title="Mayk te enviou uma proposta de trabalho" message="Converse com Mayk e acerte com ele todos os requisitos." linkURL="/chats/1"/>
        </div> 
    )
}