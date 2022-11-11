import React, { useState } from "react";
import icone_menu from "../../assets/images/icon-menu.svg";
import arrow from "../../assets/images/icon-arrow-down.svg";
import icone_close from "../../assets/images/icon-close-menu.svg";
import todo from "../../assets/images/icon-todo.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import reminders from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";

function Ambouger() {
  const [visible_modale, setvisible_modale] = useState(true);

  /**
   * stat for list1
   */
  const [rotate_boolean, setrotate_boolean] = useState(false);
  const [style_rotate_arrow, setstyle_rotate_arrow] = useState({
    transform: "rotate(180deg)",
  });
  const [anime_dame, setanime_dame] = useState("");
  

  /**
   * stat for list2
   */

  const [rotate_boolean_list2, setrotate_boolean_list2] = useState(false);
  const [style_rotate_arrow_list2, setstyle_rotate_arrow_list2] = useState({
    transform: "rotate(180deg)",
  });
  const [anime_dame_list2, setanime_dame_list2] = useState("");
  

  /**
   * permet de ouvrire la modale
   * @returns {any}
   */
  const modale_open = () => {
    if (visible_modale === true) {
      setvisible_modale(false);
    }
  };

  /**
   * permet de ferme la modale et
   * reset l'aniamtion dame
   * reset le rotation boolean
   * reset le rotation arrow
   * @returns {any}
   */
  const modale_close = () => {
    if (visible_modale === false) {
      setvisible_modale(true);

      setanime_dame("");
      setanime_dame_list2("");

      setrotate_boolean(false);

      setstyle_rotate_arrow({ transform: "rotate(0deg)" });
      setstyle_rotate_arrow_list2({ transform: "rotate(0deg)" });
    }
  };

  /**
   * permet de tourne les arrows1 vers les hauts et
   * change la valeur de rotation boolean
   * change la valeur de rotation arrow
   * @returns {any}
   */

  const onclick_list1 = () => {
    if (rotate_boolean === true) {
      setanime_dame("anime_dame_list1_reverse");
      setrotate_boolean(false);

      setstyle_rotate_arrow({ transform: "rotate(0deg)" });
      
    }

    if (rotate_boolean === false) {
      setanime_dame("anime_dame_list1");
      setrotate_boolean(true);
      setstyle_rotate_arrow({ transform: "rotate(180deg)" });
      
    }
  };

  /**
   * permet de tourne les arrows2 vers les hauts et
   * change la valeurs de rotation boolean
   * change la valeurs de rotation arrow
   * @returns {any}
   */

  const onclick_list2 = () => {
    if (rotate_boolean_list2 === true) {
      setanime_dame_list2("anime_dame_list2_reverse");
      setrotate_boolean_list2(false);

      setstyle_rotate_arrow_list2({ transform: "rotate(0deg)" });
      
    }

    if (rotate_boolean_list2 === false) {
      setanime_dame_list2("anime_dame_list2");
      setrotate_boolean_list2(true);

      setstyle_rotate_arrow_list2({ transform: "rotate(180deg)" });
      ;
    }
  };

  const modal = (
    <aside className="menu_rouleur">
      <div className="parent_of_img">
        <img
          src={icone_close}
          alt="icone_close"
          onClick={(e) => {
            e.stopPropagation();
            modale_close();
          }}
          className="icone_close"
        />
      </div>

      <ul className="navigation">
        <li className={`list_1 ${anime_dame}`} key={"papa1"} >
          <div
            className="flex_list1"
            onClick={(e) => {
              e.stopPropagation();
              onclick_list1();
            }}
          >
            <span className="par_1">Features</span>
            <img
              src={arrow}
              alt="arrow"
              className="arrow1"
              style={style_rotate_arrow}
            />
          </div>

          <ul className="sous_list_1">
            <li>
              <img src={todo} alt="Todo List" />
              Todo List
            </li>
            <li>
              <img src={calendar} alt="calendar" />
              Calendar
            </li>
            <li>
              <img src={reminders} alt="reminders" />
              Reminders
            </li>
            <li>
              <img src={planning} alt="planning" />
              Planning
            </li>
          </ul>
        </li>

        <li
          className={`list_2 ${anime_dame_list2}`}
          key={"papa2"}
          
          onClick={(e) => {
            e.stopPropagation();
            onclick_list2();
          }}
        >
          <div className="flex_list2">
            <span className="par_2">Company</span>
            <img
              src={arrow}
              alt="arrow"
              className="arrow2"
              style={style_rotate_arrow_list2}
            />
          </div>

          <ul className="sous_list_2">
            <li>History</li>
            <li>our Team</li>
            <li>Blog</li>
          </ul>
        </li>

        <li className="liste_3" key={"papa3"} >
          Careers
        </li>
        <li className="liste_4" key={"papa4"} >
          About
        </li>

        <li className="list_5" key={"papa5"} >
          <button className="login">Login</button>
          <button className="register">Register</button>
        </li>
      </ul>
    </aside>
  );






  return visible_modale ? (
    <img
      src={icone_menu}
      onClick={(e) => {
        e.stopPropagation();
        modale_open();
      }}
      alt="icone_menu"
      className="Ambouger"
    />
  ) : (
    modal
  );
}

export default Ambouger;
