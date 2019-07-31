import { createStore } from "redux";
import utterReducer from "../reducers/utterReducer";


const utters = [
  {
    _id: "5d3fb16be43da600531f46e3",
    utters: [
      {
        utterText: [
          {
            _id: "5d41ac78e43da600531f470d",
            text: "kjhs;dahsiduhiouswhdqwdw"
          },
          {
            _id: "5d41ac78e43da600531f470c",
            text: "oiqws9dyqwo78dy87qwyd"
          }
        ],
        _id: "5d41ac78e43da600531f470b"
      }
    ],
    nameUtter: "Outraresposta",
    projectName: "project"
  },
  {
    _id: "5d40589ee43da600531f46fa",
    utters: [
      {
        utterText: [
          {
            _id: "5d4058a3e43da600531f46fc",
            text: "a2"
          }
        ],
        _id: "5d4058a3e43da600531f46fb"
      }
    ],
    nameUtter: "vai_repetir",
    projectName: "project"
  },
  {
    _id: "5d406a81e43da600531f4700",
    utters: [
      {
        utterText: [
          {
            _id: "5d41ac8ae43da600531f470f",
            text: "ola edu!"
          }
        ],
        _id: "5d41ac8ae43da600531f470e"
      }
    ],
    nameUtter: "Utter_edu",
    projectName: "project"
  },
  {
    _id: "5d406a8be43da600531f4701",
    utters: [
      {
        utterText: [
          {
            text: "ola edu, tudo bem?"
          }
        ]
      }
    ],
    nameUtter: "Utter_edu",
    projectName: "project"
  },
  {
    _id: "5d408772e43da600531f4702",
    utters: [
      {
        utterText: [
          {
            _id: "5d408779e43da600531f4704",
            text: "lalala"
          }
        ],
        _id: "5d408779e43da600531f4703"
      }
    ],
    nameUtter: "bla",
    projectName: "project"
  }
]

const INITIAL_STATE = {
  text: "Não há texto",
  utters: utters
};


function configureStore(state = INITIAL_STATE) {
  return createStore(utterReducer, state);
}

export default configureStore;