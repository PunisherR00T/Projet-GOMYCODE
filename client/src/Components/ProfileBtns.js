import { Button } from "@chakra-ui/react"
import { Children } from "react"
import { Link } from "react-router-dom"

const ProfileBtns = ({name,linki}) => {
    return (
        <div id="profileBtns">
  <Button as={Link} to={linki}> {name} </Button>

        </div>
    )
}

export default ProfileBtns