import { useContext } from "react";
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import BackgroundPattern from "../../assets/media/patterns/header-bg.jpg"
import agent from "../api/agent";
import UserContext from "../context/user-context";
import Breadcrumbs from "./Breadcrumbs";
import TopBar from "./TopBar/TopBar";

const Layout = ({ children }) => {
    const userCtx = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (userCtx.user === null) {
            history.push("/login");
        }
        else {
            agent.Account.currentUser()
            .then(user => {
                userCtx.saveUser(user);
            })
            .catch(() => {
                userCtx.signOutUser();
                history.push("/login");
            });
        }
    }, []);

    useEffect(() => {
        agent.Tickets.GetTicketTypes()
            .then((res) => addDataIntoCache("ticketType", "http://localhost:3000/", res))
            .catch((e) => console.log(e))
    })


    const addDataIntoCache = (cacheName, url, response) => {
    // Converting our respons into Actual Response form
    const data = new Response(JSON.stringify(response));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        // alert('Data Added into cache!')
      });
    }
  };

    const addBodyClasses = () => {
        document.body.classList.add('header-fixed');
        document.body.classList.add('header-tablet-and-mobile-fixed');
        document.body.classList.add('toolbar-enabled');
    };

    const removeBodyClasses = () => {
        document.body.classList.remove('header-fixed');
        document.body.classList.remove('header-tablet-and-mobile-fixed');
        document.body.classList.remove('toolbar-enabled');
        document.body.style.backgroundImage = 'initial';
    };

    const generateBreadcrumbs = () => {
        const here = window.location.href.split('/').slice(3);
        // console.log(here)
        const parts = [];
        // console.log(parts)

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        for (let i = 0; i < here.length; i++) {
            const part = here[i];
            // console.log(part)
            const text = capitalize(decodeURIComponent(part).toLowerCase().split('.')[0]);
            // console.log(text)
            const link = '/' + here.slice(0, i + 1).join('/');
            // console.log(link)
            if (text !== "")
                parts.push({"title": text, "to": link});
        }

        // console.log(parts)
        return parts
    }

    const links = generateBreadcrumbs();

    const breadcrumbsOptions = {
        title: links.length > 0 ? links[links.length - 1].title : "Home",
        links
    }

    return (

         <div className="container-fluid" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div><span />
          <div className="row">
            <div className="col-md-12"><span><p>&nbsp;</p>
                <table>
                  <tbody>
                    <tr>
                     <td><strong> <Link to="/partners">Home</Link></strong></td>
                      <td>&nbsp; &nbsp; &nbsp; &nbsp;</td>
                      <td><strong><a href="https://insight.itc-cci.net/oed/sppg/ProjectManagement/_layouts/15/WopiFrame.aspx?sourcedoc=/oed/sppg/ProjectManagement/PublishingImages/SitePages/Guidelines%20on%20implementing%20partners/IP%20Assessment%20Form.docx&action=default&DefaultItemOpen=1" target="_blank" rel="noopener noreferrer">Partner Risk Assessment Form</a></strong></td>
                      <td>&nbsp; &nbsp; &nbsp; &nbsp;</td>
                      <td><strong><a href="https://insight.itc-cci.net/dps/legal/Documents/Q%20%20A%20Guide_2021.pdf?Web=1" target="_blank" rel="noopener noreferrer"> See ITC Regulation on Partner Risk Assessment</a></strong></td>
                    </tr>
                  </tbody>
                        </table></span>
                    </div>
          </div>
            </div>
            
            {/* {links.length > 0 && <Breadcrumbs options={breadcrumbsOptions}/>} */}
            {/*<Breadcrumbs options={breadcrumbsOptions}/>*/}
            {children}
      </div>
    )
}

export default Layout;