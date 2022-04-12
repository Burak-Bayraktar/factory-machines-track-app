const { gql } = require("@apollo/client/core");


const FETCH_MACHINES = gql `
query Machines {
    entities(model: Machine) 
}
`

const FETCH_MACHINE = gql `
query MachineStats($id: ID!) {
    machineStats(id: $id) {
      id
      averageCycle
      idealCycle
      status
      prodAmount
      operator {
        id
        user {
          id
          username
          first_name
          last_name
        }
      }
      shift {
        id
        start
        end
      }
      cycle
      currentProdPlan {
        id
        current_produced
        goods {
          id
          code
          amount
          current_produced
          product {
            code
            name
          }
        }
      }
      defectAmount
      workDuration
      failureDuration
      availability
      performance
      quality
      oee
    }
  }
`

module.exports.FETCH_MACHINE = FETCH_MACHINE
module.exports.FETCH_MACHINES = FETCH_MACHINES