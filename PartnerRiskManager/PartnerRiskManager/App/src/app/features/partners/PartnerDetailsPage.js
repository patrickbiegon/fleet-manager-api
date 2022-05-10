import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PartnerUser from "./details/user/PartnerUser";
import PartnerHeader from "./details/header/PartnerHeader";
import PartnerHistory from "./details/history/PartnerHistory";
import AssignPartnerModal from "./modal/AssignPartnerModal";
import TicketFormModal from "./modal/TicketFormModal";
import PendingTickets from "./details/tickets/PendingTickets";

const PartnerDetailsPage = () => {
  const { id } = useParams();
  const [Partner, setPartner] = useState(null);
  const [PartnerUser, setPartnerUser] = useState(null);
  const [historyList, setHistoryList] = useState(null);
  const [ticketList, setTicketList] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    try {
      const PartnerData = await agent.Partners.Get(id);
      const historyData = await agent.History.GetAllForPartner(id);
      const ticketData = await agent.Tickets.GetAllForPartner(id);
    } catch (e) {
      console.log(e);
    }
  }

  const handleDissociateUser = () => {
    agent.Partners.DissociateUser(Partner.id)
      .then(() => {
        setPartner(prevState => {
          return {
            ...prevState,
            user: null
          }
        })
        setPartnerUser(null);
      })
      .catch(e => console.log(e));
  }

  const submitTicket = formValues => {
    setIsSubmitting(true);
    agent.Tickets.Add({ ticket: formValues })
      .then(() => {
        getData();
        setShowTicketModal(false);
      })
      .catch(e => console.log(e))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <Tabs>
          <TabList>
            <Tab>I. GENERAL INFORMATION</Tab>
            <Tab>II. EXCLUSIONARY CRITERIA</Tab>
            <Tab>III. REPUTATIONAL RISK ASSESSMENT</Tab>
            <Tab>IV - CAPACITY AND OPERATIONAL RISK ASSESSMENT</Tab>
            <Tab>IV - CAPACITY AND OPERATIONAL RISK ASSESSMENT</Tab>
            <Tab>CONCLUSION</Tab>
          </TabList>

          <TabPanel>

            <div
              id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent"
              className="content-middle"
            >
              <div
                id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtCardSectionedWrapper"
                className="card card-sectioned flex-direction-column"
              >
                <div
                  id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtImage"
                  className="card-image ph"
                />
                <div className="card-sectioned-top flex-direction-column">
                  <div
                    id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtTitle"
                    className="card-title ph"
                  >
                    I. GENERAL INFORMATION
                  </div>
                  <div
                    id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent"
                    className="card-content"
                  >
                    <div
                      className="form-top Form OSFillParent"
                      style={{}}
                      id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGeneralInformationForm"
                      name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGeneralInformationForm"
                      data-widget-type="Form"
                    >
                      <label
                        className=" ThemeGrid_Width4 MandatoryLabel"
                        style={{}}
                        htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_EntityType"
                      >
                        Please select the type of entity:
                      </label>
                      <select
                        name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_EntityType"
                        id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_EntityType"
                        tabIndex={11}
                        className="select ThemeGrid_Width4 ThemeGrid_MarginGutter Mandatory SmartInput ReadOnly"
                        onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                        aria-required="true"
                        aria-invalid="false"
                        autoCorrect="off"
                        spellCheck="false"
                        origvalue={1}
                      >
                        <option value={1}>Business</option>
                        <option value={2}>Business support organization</option>
                        <option value={3}>Nonprofit organization</option>
                        <option value={4}>Academia, training and research</option>
                        <option value={5}>Other, please specify</option>
                      </select>
                      <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                      <span className="fa fa-pencil FormEditPencil" />
                      <span
                        style={{ display: "none" }}
                        className="ValidationMessage"
                        role="alert"
                        id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_EntityType"
                      />
                      <div className="margin-top-m">
                        <label
                          className=" OSFillParent MandatoryLabel"
                          style={{}}
                          htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NameOfEntity"
                        >
                          Name of the entity:
                        </label>
                        <input
                          name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_NameOfEntity"
                          type="text"
                          defaultValue="Test Partner"
                          maxLength={100}
                          id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NameOfEntity"
                          tabIndex={12}
                          className="input OSFillParent Mandatory SmartInput ReadOnly"
                          placeholder="Enter Name of the entity:"
                          onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                          aria-required="true"
                          aria-invalid="false"
                          autoCorrect="off"
                          spellCheck="false"
                          origvalue="Test Partner"
                        />
                        <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                        <span className="fa fa-pencil FormEditPencil" />
                        <span
                          style={{ display: "none" }}
                          className="ValidationMessage"
                          role="alert"
                          id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NameOfEntity"
                        />
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Address"
                          >
                            Address:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_Address"
                            type="text"
                            defaultValue="Test Addres"
                            maxLength={50}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Address"
                            tabIndex={13}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter Address."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue="Test Addres"
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Address"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Website"
                          >
                            Website/ telephone:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_Website"
                            type="text"
                            defaultValue="test website"
                            maxLength={20}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Website"
                            tabIndex={14}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Website/ telephone."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue="test website"
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Website"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_MainContact"
                          >
                            Main contact(s) at the entity::
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_MainContact"
                            type="text"
                            defaultValue={82943798498}
                            maxLength={50}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_MainContact"
                            tabIndex={15}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="[name and title]."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue={82943798498}
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_MainContact"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Region"
                          >
                            Countries/ regions of operation of the entity:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_Region"
                            type="text"
                            defaultValue="Kenya"
                            maxLength={50}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Region"
                            tabIndex={16}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue="Kenya"
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Region"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_ShortDesc"
                          >
                            Short description of the nature of the entity (e.g. sector, area
                            of work)::
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_ShortDesc"
                            type="text"
                            defaultValue="Short desc"
                            maxLength={250}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_ShortDesc"
                            tabIndex={17}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue="Short desc"
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_ShortDesc"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Ownership"
                          >
                            Ownership/Management:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_Ownership"
                            type="text"
                            defaultValue={10}
                            maxLength={50}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Ownership"
                            tabIndex={18}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue={10}
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_Ownership"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NumberOfEmployees"
                          >
                            Number of employees:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_NumberOfEmployees"
                            type="text"
                            defaultValue={10}
                            maxLength={37}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NumberOfEmployees"
                            tabIndex={19}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue={10}
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_NumberOfEmployees"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent MandatoryLabel"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_AnnualTurnover"
                          >
                            Annual turnover in USD: (Only if publicly available)
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_AnnualTurnover"
                            type="text"
                            defaultValue={100}
                            maxLength={37}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_AnnualTurnover"
                            tabIndex={20}
                            className="input OSFillParent Mandatory SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-required="true"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue={100}
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_AnnualTurnover"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_YearOfLatest"
                          >
                            Name of legal representative:
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGenInfo_YearOfLatest"
                            type="text"
                            maxLength={50}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_YearOfLatest"
                            tabIndex={21}
                            className="input OSFillParent SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue=""
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGenInfo_YearOfLatest"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className=" OSFillParent"
                            style={{}}
                            htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGentInfo_EOI"
                          >
                            Year of latest Annual Report (provide web link, if available):
                          </label>
                          <input
                            name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtGentInfo_EOI"
                            type="text"
                            defaultValue={0}
                            maxLength={37}
                            id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGentInfo_EOI"
                            tabIndex={22}
                            className="input OSFillParent SmartInput ReadOnly"
                            placeholder="Enter extended description with details."
                            onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue={0}
                          />
                          <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                          <span className="fa fa-pencil FormEditPencil" />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtGentInfo_EOI"
                          />
                          <div className="margin-top-m">
                            <label
                              className=" OSFillParent"
                              style={{}}
                              htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity12"
                            >
                              Is this entity a subsidiary or country office of another
                              entity?
                            </label>
                            <input
                              name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtNameOfEntity12"
                              type="text"
                              defaultValue="1900-01-01"
                              maxLength={20}
                              id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity12"
                              tabIndex={23}
                              className="input OSFillParent SmartInput ReadOnly"
                              placeholder="Enter extended description with details."
                              onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                              aria-invalid="false"
                              autoCorrect="off"
                              spellCheck="false"
                              origvalue="1900-01-01"
                            />
                            <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                            <span className="fa fa-pencil FormEditPencil" />
                            <span
                              style={{ display: "none" }}
                              className="ValidationMessage"
                              role="alert"
                              id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity12"
                            />
                          </div>
                          <div className="margin-top-m">
                            <label
                              className=" OSFillParent MandatoryLabel"
                              style={{}}
                              htmlFor="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity13"
                            >
                              Have you carried out an Expression of Interest?
                            </label>
                            <input
                              name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtContent$wtNameOfEntity13"
                              type="text"
                              defaultValue={1}
                              maxLength={50}
                              id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity13"
                              tabIndex={24}
                              className="input OSFillParent Mandatory SmartInput ReadOnly"
                              placeholder="Enter extended description with details."
                              onkeydown="return OsEnterKey('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39', arguments[0] || window.event);"
                              aria-required="true"
                              aria-invalid="false"
                              autoCorrect="off"
                              spellCheck="false"
                              origvalue={1}
                            />
                            <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                            <span className="fa fa-pencil FormEditPencil" />
                            <span
                              style={{ display: "none" }}
                              className="ValidationMessage"
                              role="alert"
                              id="ValidationMessage_wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtContent_wtNameOfEntity13"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter"
                    className="card-footer ph"
                  >
                    <div className="ThemeGrid_Width6" style={{ textAlign: "left" }}>
                      <input
                        onclick="OsAjax(arguments[0] || window.event,'wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt42','wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtFooter$wt42','','__OSVSTATE,',''); return false;"
                        type="submit"
                        name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtFooter$wt42"
                        defaultValue="Cancel"
                        id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt42"
                        tabIndex={25}
                        className="Button text-neutral-8"
                      />
                    </div>
                    <div
                      className="ThemeGrid_Width6 ThemeGrid_MarginGutter"
                      style={{ textAlign: "right" }}
                    >
                      <input
                        onclick="OsPage_ClientValidate('wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39');"
                        type="submit"
                        name="wt27$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt20$block$wtFooter$wt39"
                        defaultValue="Save"
                        id="wt27_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt20_block_wtFooter_wt39"
                        tabIndex={26}
                        className="Button Is_Default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <div
              id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent"
              className="content-middle"
            >
              <div
                id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtCardSectionedWrapper"
                className="card card-sectioned flex-direction-column"
              >
                <div
                  id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtImage"
                  className="card-image ph"
                />
                <div className="card-sectioned-top flex-direction-column">
                  <div
                    id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtTitle"
                    className="card-title ph"
                  />
                  <div
                    id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent"
                    className="card-content"
                  >
                    <div
                      className="form-top Form OSFillParent"
                      style={{}}
                      id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExclusionaryCriteriaForm"
                      name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExclusionaryCriteriaForm"
                      data-widget-type="Form"
                    >
                      <label
                        className="OSFillParent"
                        style={{}}
                        htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_UNSanction"
                      >
                        Appearance on the United Nations Security Council Sanctions List or
                        the United Nations Ineligibility List, or in violation of UN
                        sanctions, relevant conventions, treaties and resolutions Entities
                        directly engaged in activities inconsistent with the UN Security
                        Council Sanctions, Resolutions, and other similar measures
                      </label>
                      <input
                        type="checkbox"
                        name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_UNSanction"
                        id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_UNSanction"
                        tabIndex={11}
                        className="checkbox SmartInput ReadOnly"
                        onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                        aria-invalid="false"
                        autoCorrect="off"
                        spellCheck="false"
                        origvalue="false"
                      />
                      <span
                        style={{ display: "none" }}
                        className="ValidationMessage"
                        role="alert"
                        id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_UNSanction"
                      />
                      <div className="margin-top-m">
                        <label
                          className="OSFillParent"
                          style={{}}
                          htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Weapon"
                        >
                          Weapons manufacturing or sales as a core business Entities
                          directly and primarily involved in the sale, manufacture or
                          distribution of weapons
                        </label>
                        <input
                          type="checkbox"
                          name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_Weapon"
                          id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Weapon"
                          tabIndex={12}
                          className="checkbox SmartInput ReadOnly"
                          onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                          aria-invalid="false"
                          autoCorrect="off"
                          spellCheck="false"
                          origvalue="false"
                        />
                        <span
                          style={{ display: "none" }}
                          className="ValidationMessage"
                          role="alert"
                          id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Weapon"
                        />
                        <div className="margin-top-m">
                          <label className="OSFillParent" style={{}} htmlFor="">
                            Direct and core involvement in the manufacturing or trading of
                            controversial weapons subject to bans under International
                            Treaties Entities directly and primarily involved in the sale,
                            manufacture or distribution of weapons banned by UN treaties,
                            including anti-personnel mines, cluster bombs and ammunitions,
                            and biological, chemical, or nuclear weapons, for instance:
                          </label>
                        </div>
                        <div className="margin-top-m">
                          <label
                            className="OSFillParent"
                            style={{}}
                            htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Tobacco"
                          >
                            Tobacco manufacturers Entities for whom the core business is the
                            production and wholesale distribution of tobacco products:
                          </label>
                        </div>
                        <input
                          type="checkbox"
                          name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_Tobacco"
                          id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Tobacco"
                          tabIndex={13}
                          className="checkbox SmartInput ReadOnly"
                          onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                          aria-invalid="false"
                          autoCorrect="off"
                          spellCheck="false"
                          origvalue="false"
                        />
                        <span
                          style={{ display: "none" }}
                          className="ValidationMessage"
                          role="alert"
                          id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Tobacco"
                        />
                        <div className="margin-top-m">
                          <label
                            className="OSFillParent"
                            style={{}}
                            htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_HumanRight"
                          >
                            Direct involvement or complicity in systematic or egregious
                            human rights abuses through operations, products, or services
                            Entities engaging in any of the following: - causing or directly
                            contributing to gross human rights abuses through their own
                            business activities (such as forced or compulsory labour or
                            child labour, human rights violations, including rights of
                            indigenous peoples and/or other vulnerable groups); - tolerating
                            or knowingly ignoring such practices by an entity associated
                            with it, or - knowingly providing practical assistance or
                            encouragement that has a substantial effect on the perpetration
                            of the gross human rights abuse :
                          </label>
                          <input
                            type="checkbox"
                            name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_HumanRight"
                            id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_HumanRight"
                            tabIndex={14}
                            className="checkbox SmartInput ReadOnly"
                            onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                            aria-invalid="false"
                            autoCorrect="off"
                            spellCheck="false"
                            origvalue="false"
                          />
                          <span
                            style={{ display: "none" }}
                            className="ValidationMessage"
                            role="alert"
                            id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_HumanRight"
                          />
                        </div>
                        <div className="margin-top-m">
                          <label
                            className="OSFillParent"
                            style={{}}
                            htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Prinicple"
                          >
                            Systematic failure to demonstrate a commitment or to meet in
                            practice the principles of the United Nations, including
                            statements or principles that are consistent with and reflect
                            the Universal Declaration of Human Rights, the Rio Declaration
                            and the ILO Declaration on Fundamental Principles and Rights at
                            Work, the UN Global Compact or the United Nations Guiding
                            Principles on Business and Human Rights Entities that
                            systematically fail to demonstrate a commitment to meet the
                            stipulated principles (human rights, labour, environment and
                            anti-corruption)
                          </label>
                        </div>
                        <input
                          type="checkbox"
                          name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_Prinicple"
                          id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Prinicple"
                          tabIndex={15}
                          className="checkbox SmartInput ReadOnly"
                          onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                          aria-invalid="false"
                          autoCorrect="off"
                          spellCheck="false"
                          origvalue="false"
                        />
                        <span
                          style={{ display: "none" }}
                          className="ValidationMessage"
                          role="alert"
                          id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Prinicple"
                        />
                        <div className="margin-top-m" />
                        <div className="margin-top-m">
                          <label
                            className="OSFillParent"
                            style={{}}
                            htmlFor="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Rationale"
                          >
                            Is the Entity a participant supporting the Global Compact
                            Principles (list available at www.unglobalcompact.org)?
                          </label>
                        </div>
                        <input
                          type="checkbox"
                          name="wt14$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$OutSystemsUIWeb_wt28$block$wtContent$wtExcCrit_Rationale"
                          id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Rationale"
                          tabIndex={16}
                          className="checkbox SmartInput ReadOnly"
                          onkeydown="return OsEnterKey('wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter_wt29', arguments[0] || window.event);"
                          aria-invalid="false"
                          autoCorrect="off"
                          spellCheck="false"
                          origvalue="false"
                        />
                        <span
                          style={{ display: "none" }}
                          className="ValidationMessage"
                          role="alert"
                          id="ValidationMessage_wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtContent_wtExcCrit_Rationale"
                        />
                        <br />
                        <span className="background-blue-light">
                          &nbsp;The self-certification applies only to IMPLEMENTING PARTNERS
                          FROM THE PRIVATE SECTOR. All private sector partners that receive
                          money from ITC will be requested to self-certify against the
                          Exclusionary Criteria. If the exclusionary criteria and
                          self-certification did not already take place during the
                          Expression of Interest (EOI), it needs to be conducted at this
                          stage. Once the entity has self-certified, the rest of the
                          assessment form can be completed.
                        </span>
                        <div className="margin-top-m" />
                        <div className="margin-top-m" />
                        <div className="margin-top-m" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="wt14_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_OutSystemsUIWeb_wt28_block_wtFooter"
                    className="card-footer ph"
                  >
                    <div className="ThemeGrid_Width6" style={{ textAlign: "left" }}>
                      <button className="btn btn-primary">Save</button>
                    </div>
                    <div
                      style={{ textAlign: "right" }}
                    >
                      <button className="btn btn-primary">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </TabPanel>
          <TabPanel>
            <div
              id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent"
              className="content-middle"
            >
              <div
                className="form-top Form OSFillParent"
                style={{}}
                id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtReputationalRiskAssessment"
                name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtReputationalRiskAssessment"
                data-widget-type="Form"
              >
                <label
                  className="OSFillParent"
                  style={{}}
                  htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                >
                  Please carry out an internet search, focussing on information that shows
                  criticism or controversies about the Entity. There may be factors that can
                  cause reputational risks to ITC, such as issues related to: - Labour: e.g.
                  violation on International Labour Law, discrimination in respect of
                  employment or occupation - Governance: e.g. corruption, fraud,
                  controversial individuals affiliated with the company - Discrimination:
                  e.g. discrimination based on religion, gender, sex, ethnicity, race, or
                  origin - Environment: e.g. pollution, climate change, mismanagement of
                  waste Are there signs or evidence of:
                </label>
                <div className="margin-top-m">
                  <label
                    className="OSFillParent"
                    style={{}}
                    htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                  >
                    - Significant criticism from governments, media, or civil society
                    organizations against the Entity
                  </label>
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_UNSanction"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                  />
                  <label
                    className="OSFillParent"
                    style={{}}
                    htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                  >
                    - Demonstrations against the Entity
                  </label>
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Weapon"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                  />
                  <div className="margin-top-m">
                    <label
                      className="OSFillParent"
                      style={{}}
                      htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                      id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtchklawsuit"
                      name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtchklawsuit"
                    >
                      - Lawsuits or legal actions against the Entity, or past convictions
                      for unlawful activities
                    </label>
                  </div>
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Lawsuit"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                  />
                  <br />
                  <label
                    className="OSFillParent"
                    style={{}}
                    htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                  >
                    - Other (specify):{" "}
                  </label>
                  <input
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt43"
                    type="text"
                    maxLength={50}
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt43"
                    className="input ThemeGrid_Width4 SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue=""
                  />
                  <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                  <span className="fa fa-pencil FormEditPencil" />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt43"
                  />
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Tobacco2"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                    className="checkbox ThemeGrid_MarginGutter SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                  />
                  &nbsp;
                  <div className="margin-top-m">
                    <label className="OSFillParent" style={{}} htmlFor="">
                      Does ITC or any other UN organization currently have, or has had in
                      the past 5 years, any engagement with the Entity?{" "}
                    </label>
                  </div>
                  <div className="margin-top-m">
                    <label
                      className="OSFillParent"
                      style={{}}
                      htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                    >
                      Does ITC or any other UN organization currently have, or has had in
                      the past 5 years, any engagement with the Entity?
                    </label>
                    <input
                      type="checkbox"
                      name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_HumanRight"
                      id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                      className="checkbox SmartInput ReadOnly"
                      onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                      aria-invalid="false"
                      autoCorrect="off"
                      spellCheck="false"
                      origvalue="false"
                    />
                    <span
                      style={{ display: "none" }}
                      className="ValidationMessage"
                      role="alert"
                      id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                    />
                  </div>
                  <div className="margin-top-m">
                    <label
                      className="OSFillParent"
                      style={{}}
                      htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                      id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_Controversies"
                      name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_Controversies"
                    >
                      If yes, please list:
                    </label>
                  </div>
                  <input
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_controversietxt"
                    type="text"
                    maxLength={500}
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                    className="input ThemeGrid_Width4 SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue=""
                  />
                  <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                  <span className="fa fa-pencil FormEditPencil" />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                  />
                  <div className="margin-top-m" />
                  <div className="margin-top-m">
                    <label
                      className="OSFillParent"
                      style={{}}
                      htmlFor="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                    >
                      Did any previous engagement harm ITC’s or UN’s reputation?
                    </label>
                  </div>
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Rationale"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                  />
                  <br />
                  <span className="background-blue-light">
                    CONTRIBUTION TO THE SDGs&nbsp;
                  </span>
                  <div className="margin-top-m">
                    Is there evidence that the entity is committed and is contributing to
                    the SDGs? (e.g. through CSR or the business model)&nbsp;
                  </div>
                  <input
                    type="checkbox"
                    name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt41"
                    id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt41"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt41"
                  />
                  <div className="margin-top-m">
                    CONCLUSION&nbsp; <br />
                    &nbsp;
                    <select
                      name="wt18$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt34"
                      id="wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt34"
                      className="select ThemeGrid_Width4 ThemeGrid_MarginGutter SmartInput ReadOnly"
                      onkeydown="return OsEnterKey('wt18_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt5', arguments[0] || window.event);"
                      aria-invalid="false"
                      autoCorrect="off"
                      spellCheck="false"
                    ></select>
                    <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                    <span className="fa fa-pencil FormEditPencil" />
                    <span
                      style={{ display: "none" }}
                      className="ValidationMessage"
                      role="alert"
                      id="ValidationMessage_wt18_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt34"
                    />
                  </div>
                  <div className="margin-top-m" />
                </div>
              </div>
            </div>

          </TabPanel>
          <TabPanel>
          <div
  id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent"
  className="content-middle"
>
  <div
    className="form-top Form OSFillParent"
    style={{}}
    id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtReputationalRiskAssessment"
    name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtReputationalRiskAssessment"
    data-widget-type="Form"
  >
    <label
      className="OSFillParent"
      style={{}}
      htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
    >
      THE CAPACITY AND OPERATIONAL RISK ASSESSMENT HAS THREE DIFFERENT VERSIONS
      DEPENDING ON THE GRANT AMOUNT: I. For grants between 30,000 and 50,000 USD
      please complete only part A II. For grants between 50,000-400,000 USD
      please complete only part B III. For grants above 400,000 USD please
      complete only part C
    </label>
    <div className="margin-top-m" style={{ display: "none" }}>
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
      >
        - Significant criticism from governments, media, or civil society
        organizations against the Entity
      </label>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_UNSanction"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
      />
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
      >
        - Demonstrations against the Entity
      </label>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Weapon"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
      />
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtchklawsuit"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtchklawsuit"
        >
          - Lawsuits or legal actions against the Entity, or past convictions
          for unlawful activities
        </label>
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Lawsuit"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
      />
      <br />
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
      >
        - Other (specify):{" "}
      </label>
      <input
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt25"
        type="text"
        maxLength={50}
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt25"
        className="input ThemeGrid_Width4 SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue=""
      />
      <a className="SmartInput_Undo" href="#" aria-label="Undo" />
      <span className="fa fa-pencil FormEditPencil" />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt25"
      />
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Tobacco2"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
        className="checkbox ThemeGrid_MarginGutter SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
      />
      &nbsp;
      <div className="margin-top-m">
        <label className="OSFillParent" style={{}} htmlFor="">
          Does ITC or any other UN organization currently have, or has had in
          the past 5 years, any engagement with the Entity?{" "}
        </label>
      </div>
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
        >
          Does ITC or any other UN organization currently have, or has had in
          the past 5 years, any engagement with the Entity?
        </label>
        <input
          type="checkbox"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_HumanRight"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
          className="checkbox SmartInput ReadOnly"
          onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
          aria-invalid="false"
          autoCorrect="off"
          spellCheck="false"
          origvalue="false"
        />
        <span
          style={{ display: "none" }}
          className="ValidationMessage"
          role="alert"
          id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
        />
      </div>
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_Controversies"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_Controversies"
        >
          If yes, please list:
        </label>
      </div>
      <input
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_controversietxt"
        type="text"
        maxLength={500}
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
        className="input ThemeGrid_Width4 SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue=""
      />
      <a className="SmartInput_Undo" href="#" aria-label="Undo" />
      <span className="fa fa-pencil FormEditPencil" />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
      />
      <div className="margin-top-m" />
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
        >
          Did any previous engagement harm ITC’s or UN’s reputation?
        </label>
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Rationale"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
      />
      <br />
      <span className="background-blue-light">
        CONTRIBUTION TO THE SDGs&nbsp;
      </span>
      <div className="margin-top-m">
        Is there evidence that the entity is committed and is contributing to
        the SDGs? (e.g. through CSR or the business model)&nbsp;
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt9"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt9"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt9"
      />
      <div className="margin-top-m">
        CONCLUSION&nbsp; <br />
        &nbsp;
        <select
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt53"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt53"
          className="select ThemeGrid_Width4 ThemeGrid_MarginGutter SmartInput ReadOnly"
          onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
          aria-invalid="false"
          autoCorrect="off"
          spellCheck="false"
        ></select>
        <a className="SmartInput_Undo" href="#" aria-label="Undo" />
        <span className="fa fa-pencil FormEditPencil" />
        <span
          style={{ display: "none" }}
          className="ValidationMessage"
          role="alert"
          id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt53"
        />
      </div>
      <div className="margin-top-m" />
    </div>
  </div>
</div>

          </TabPanel>
          <TabPanel>
          <div
  id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent"
  className="content-middle"
>
  <div
    className="form-top Form OSFillParent"
    style={{}}
    id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtReputationalRiskAssessment"
    name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtReputationalRiskAssessment"
    data-widget-type="Form"
  >
    <label
      className="OSFillParent"
      style={{}}
      htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
    >
      THE CAPACITY AND OPERATIONAL RISK ASSESSMENT HAS THREE DIFFERENT VERSIONS
      DEPENDING ON THE GRANT AMOUNT: I. For grants between 30,000 and 50,000 USD
      please complete only part A II. For grants between 50,000-400,000 USD
      please complete only part B III. For grants above 400,000 USD please
      complete only part C
    </label>
    <div className="margin-top-m" style={{ display: "none" }}>
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
      >
        - Significant criticism from governments, media, or civil society
        organizations against the Entity
      </label>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_UNSanction"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
      />
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
      >
        - Demonstrations against the Entity
      </label>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Weapon"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
      />
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtchklawsuit"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtchklawsuit"
        >
          - Lawsuits or legal actions against the Entity, or past convictions
          for unlawful activities
        </label>
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Lawsuit"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
      />
      <br />
      <label
        className="OSFillParent"
        style={{}}
        htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
      >
        - Other (specify):{" "}
      </label>
      <input
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt25"
        type="text"
        maxLength={50}
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt25"
        className="input ThemeGrid_Width4 SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue=""
      />
      <a className="SmartInput_Undo" href="#" aria-label="Undo" />
      <span className="fa fa-pencil FormEditPencil" />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt25"
      />
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Tobacco2"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
        className="checkbox ThemeGrid_MarginGutter SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
      />
      &nbsp;
      <div className="margin-top-m">
        <label className="OSFillParent" style={{}} htmlFor="">
          Does ITC or any other UN organization currently have, or has had in
          the past 5 years, any engagement with the Entity?{" "}
        </label>
      </div>
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
        >
          Does ITC or any other UN organization currently have, or has had in
          the past 5 years, any engagement with the Entity?
        </label>
        <input
          type="checkbox"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_HumanRight"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
          className="checkbox SmartInput ReadOnly"
          onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
          aria-invalid="false"
          autoCorrect="off"
          spellCheck="false"
          origvalue="false"
        />
        <span
          style={{ display: "none" }}
          className="ValidationMessage"
          role="alert"
          id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
        />
      </div>
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_Controversies"
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_Controversies"
        >
          If yes, please list:
        </label>
      </div>
      <input
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_controversietxt"
        type="text"
        maxLength={500}
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
        className="input ThemeGrid_Width4 SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue=""
      />
      <a className="SmartInput_Undo" href="#" aria-label="Undo" />
      <span className="fa fa-pencil FormEditPencil" />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
      />
      <div className="margin-top-m" />
      <div className="margin-top-m">
        <label
          className="OSFillParent"
          style={{}}
          htmlFor="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
        >
          Did any previous engagement harm ITC’s or UN’s reputation?
        </label>
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Rationale"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
      />
      <br />
      <span className="background-blue-light">
        CONTRIBUTION TO THE SDGs&nbsp;
      </span>
      <div className="margin-top-m">
        Is there evidence that the entity is committed and is contributing to
        the SDGs? (e.g. through CSR or the business model)&nbsp;
      </div>
      <input
        type="checkbox"
        name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt9"
        id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt9"
        className="checkbox SmartInput ReadOnly"
        onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
        aria-invalid="false"
        autoCorrect="off"
        spellCheck="false"
        origvalue="false"
      />
      <span
        style={{ display: "none" }}
        className="ValidationMessage"
        role="alert"
        id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt9"
      />
      <div className="margin-top-m">
        CONCLUSION&nbsp; <br />
        &nbsp;
        <select
          name="wt52$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt53"
          id="wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt53"
          className="select ThemeGrid_Width4 ThemeGrid_MarginGutter SmartInput ReadOnly"
          onkeydown="return OsEnterKey('wt52_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt26', arguments[0] || window.event);"
          aria-invalid="false"
          autoCorrect="off"
          spellCheck="false"
        ></select>
        <a className="SmartInput_Undo" href="#" aria-label="Undo" />
        <span className="fa fa-pencil FormEditPencil" />
        <span
          style={{ display: "none" }}
          className="ValidationMessage"
          role="alert"
          id="ValidationMessage_wt52_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt53"
        />
      </div>
      <div className="margin-top-m" />
    </div>
  </div>
</div>

          </TabPanel>
          <TabPanel>
            <div
              className="form-top Form OSFillParent"
              style={{}}
              id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtReputationalRiskAssessment"
              name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtReputationalRiskAssessment"
              data-widget-type="Form"
            >
              <label
                className=" OSFillParent"
                style={{}}
                htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
              >
                The Responsible Officer certifies that s/he has carried out all best efforts
                to collect information and has also documented the risks that have been
                identified in relation to the proposed Entity under this assessment.
                Decision as to whether or not ITC should engage with the proposed Entity is
                based on the information collected, based on a reasonable search with the
                available means. Responsible Officers, Chief and Director assume full
                responsibility and accountability for the assessment.
              </label>
              <div className="margin-top-m">
                <label
                  className=" OSFillParent"
                  style={{}}
                  htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                >
                  -Under all “categories” the partner is considered apt and low risk.Under
                  all “categories” the partner is considered apt and low risk.
                </label>
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_UNSanction"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                  className="checkbox SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_UNSanction"
                />
                <label
                  className=" OSFillParent"
                  style={{}}
                  htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                >
                  -One or more “Categories or types” or risk are involved in the partnership
                  or partner related. Risks exist, but they are clearly outweighed by the
                  expected benefits. Corporate approval is required to pursue the
                  partnership. The risk-benefit analysis indicates that the partnership is
                  worth pursuing.  MEDIUM RISK LEVEL
                </label>
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Weapon"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                  className="checkbox SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Weapon"
                />
                <div className="margin-top-m">
                  <label
                    className=" OSFillParent"
                    style={{}}
                    htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                    id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtchklawsuit"
                    name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtchklawsuit"
                  >
                    - One or more “no-go” risks are present, or significant risks are not
                    sufficiently outweighed by benefits. The risk-benefit analysis indicates
                    that ITC should refrain from engaging in the partnership.  HIGH RISK
                    LEVEL
                  </label>
                </div>
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Lawsuit"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                  className="checkbox SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Lawsuit"
                />
                <br />
                <label
                  className=" OSFillParent"
                  style={{}}
                  htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                >
                  Process carried out for the identification and selection of the partner.
                  Project Manager to provide the rationale for selection of partner and to
                  keep records of process.
                </label>
                <input
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt39"
                  type="text"
                  maxLength={50}
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt39"
                  className="input ThemeGrid_Width4 SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue=""
                />
                <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                <span className="fa fa-pencil FormEditPencil" />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt39"
                />
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Tobacco2"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                  className="checkbox ThemeGrid_MarginGutter SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Tobacco2"
                />
                &nbsp;
                <div className="margin-top-m">
                  <label className=" OSFillParent" style={{}} htmlFor="">
                    Provide a brief statement on the strategic objective of partnering with
                    this entity. How will this partnership contribute to ITC’s work and
                    development cooperation? What are the arguments that speak for a
                    partnership with this entity? (e.g. technical expertise, cost
                    effectiveness, multiplier effect, CSR, ownership and sustainability)
                  </label>
                </div>
                <div className="margin-top-m">
                  <label
                    className=" OSFillParent"
                    style={{}}
                    htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                  >
                    If relevant, describe what the prospective partner will expect from ITC
                    in return, in addition to the payment, in the course of the partnership
                    (e.g. permission to place ITC’s logo on websites or in reports):
                  </label>
                  <input
                    type="checkbox"
                    name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_HumanRight"
                    id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                    className="checkbox SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                    origvalue="false"
                  />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_HumanRight"
                  />
                </div>
                <div className="margin-top-m">
                  <label
                    className=" OSFillParent"
                    style={{}}
                    htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                    id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_Controversies"
                    name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_Controversies"
                  >
                    Based on the information collected and assessed (exclusionary criteria,
                    reputational risk, capacity, risk-benefit assessment) the responsible
                    officer rates the overall risk level:
                  </label>
                </div>
                <input
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtRep_controversietxt"
                  type="text"
                  maxLength={500}
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                  className="input ThemeGrid_Width4 SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue=""
                />
                <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                <span className="fa fa-pencil FormEditPencil" />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtRep_controversietxt"
                />
                <div className="margin-top-m" />
                <div className="margin-top-m">
                  <label
                    className=" OSFillParent"
                    style={{}}
                    htmlFor="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                  >
                    Did any previous engagement harm ITC’s or UN’s reputation?
                  </label>
                </div>
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wtExcCrit_Rationale"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                  className="checkbox SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wtExcCrit_Rationale"
                />
                <br />
                <span className="background-blue-light">
                  RECOMMENDATION BY THE RESPONSIBLE OFFICER
                </span>
                <div className="margin-top-m">
                  Is there evidence that the entity is committed and is contributing to the
                  SDGs? (e.g. through CSR or the business model)&nbsp;
                </div>
                <input
                  type="checkbox"
                  name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt30"
                  id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt30"
                  className="checkbox SmartInput ReadOnly"
                  onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                  aria-invalid="false"
                  autoCorrect="off"
                  spellCheck="false"
                  origvalue="false"
                />
                <span
                  style={{ display: "none" }}
                  className="ValidationMessage"
                  role="alert"
                  id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt30"
                />
                <div className="margin-top-m">
                  CONCLUSION&nbsp; <br />
                  &nbsp;
                  <select
                    name="wt12$OutSystemsUIWeb_wt18$block$wtContent$wtMainContent$wt46"
                    id="wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt46"
                    className="select ThemeGrid_Width4 ThemeGrid_MarginGutter SmartInput ReadOnly"
                    onkeydown="return OsEnterKey('wt12_OutSystemsUIWeb_wt18_block_wtContent_wtFooter_wt24', arguments[0] || window.event);"
                    aria-invalid="false"
                    autoCorrect="off"
                    spellCheck="false"
                  ></select>
                  <a className="SmartInput_Undo" href="#" aria-label="Undo" />
                  <span className="fa fa-pencil FormEditPencil" />
                  <span
                    style={{ display: "none" }}
                    className="ValidationMessage"
                    role="alert"
                    id="ValidationMessage_wt12_OutSystemsUIWeb_wt18_block_wtContent_wtMainContent_wt46"
                  />
                </div>
                <div className="margin-top-m" />
              </div>
            </div>

          </TabPanel>
        </Tabs>

      </div>
      <div className="col-md-3">
        <div
          className="panel panel-default"
          style={{ width: "100%", backgroundColor: "rgba(237, 246, 250, 0.6)" }}
        >
          <div className="panel-body">
            <div>
              <div style={{ marginTop: 25 }}>
                <h4>Approval Process</h4>
                <div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 13,
                      backgroundColor: "rgb(250, 250, 250)"
                    }}
                  >
                    <div
                      style={{ width: "100%", backgroundColor: "rgb(238, 238, 238)" }}
                    >
                      <strong>Project Manager</strong>
                    </div>
                    <div style={{ float: "left", width: "23.6%", fontSize: "0.8em" }}>
                      <div
                        title="Section Chief"
                        className="emp-photo"
                        style={{
                          backgroundImage:
                            'url("https://contacts.itc-cci.net/api/employees/photo/463")',
                          display: "block"
                        }}
                      />
                      Test Manager
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 13,
                      backgroundColor: "rgb(250, 250, 250)"
                    }}
                  >
                    <div
                      style={{ width: "100%", backgroundColor: "rgb(238, 238, 238)" }}
                    >
                      <strong>Section Chief</strong>
                    </div>
                    <div style={{ float: "left", width: "23.6%", fontSize: "0.8em" }}>
                      <div
                        title="DED Approval"
                        className="emp-photo"
                        style={{
                          backgroundImage:
                            'url("https://contacts.itc-cci.net/api/employees/photo/7549")',
                          display: "block"
                        }}
                      />
                      Test Section Chief
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                  <div width="100%">
                    <div style={{ float: "left", width: "50%" }}>
                      <div
                        style={{
                          width: "100%",
                          marginTop: 13,
                          backgroundColor: "rgb(250, 250, 250)"
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "rgb(238, 238, 238)"
                          }}
                        >
                          <strong>Director</strong>
                        </div>
                        <div
                          style={{ float: "left", width: "23.6%" }}
                        >
                          <div
                            style={{
                              backgroundImage: 'url("/style/users.png")',
                              backgroundSize: "100%",
                              backgroundRepeat: "no-repeat",
                              width: 30,
                              height: 30
                            }}
                          />
                          {/* react-text: 2969 */}Legal{/* /react-text */}
                        </div>
                        <div style={{ clear: "both" }} />
                      </div>
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 13,
                      backgroundColor: "rgb(250, 250, 250)"
                    }}
                  >
                    <div
                      style={{ width: "100%", backgroundColor: "rgb(238, 238, 238)" }}
                    >
                      <strong> Senior Management Committee (SMC)</strong>
                    </div>
                    <div style={{ float: "left", width: "23.6%", fontSize: "0.8em" }}>
                      <div
                        title="DPS Director"
                        className="emp-photo"
                        style={{
                          backgroundImage:
                            'url("https://contacts.itc-cci.net/api/employees/photo/6514")',
                          display: "block"
                        }}
                      />
                      {/* react-text: 2977 */}lynch{/* /react-text */}
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 13,
                      backgroundColor: "rgb(250, 250, 250)"
                    }}
                  >
                    <div
                      style={{ width: "100%", backgroundColor: "rgb(238, 238, 238)" }}
                    >
                      <strong>Registry</strong>
                    </div>
                    <div style={{ float: "left", width: "23.6%", fontSize: "0.8em" }}>
                      <div
                        style={{
                          backgroundImage: 'url("/style/users.png")',
                          backgroundSize: "100%",
                          backgroundRepeat: "no-repeat",
                          width: 30,
                          height: 30
                        }}
                      />
                      {/* react-text: 2984 */}Registry{/* /react-text */}
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: 13,
                      backgroundColor: "rgb(250, 250, 250)"
                    }}
                  >
                    <div
                      style={{ width: "100%", backgroundColor: "rgb(238, 238, 238)" }}
                    >
                      <strong>Registry</strong>
                    </div>
                    <div style={{ float: "left", width: "23.6%", fontSize: "0.8em" }}>
                      <div
                        style={{
                          backgroundImage: 'url("/style/users.png")',
                          backgroundSize: "100%",
                          backgroundRepeat: "no-repeat",
                          width: 30,
                          height: 30
                        }}
                      />
                      {/* react-text: 2991 */}Registry{/* /react-text */}
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerDetailsPage;