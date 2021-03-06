import { JobListingCard } from "../components/JobListingCard";
import JobsHeader from "../components/JobsHeader";
import { connect } from "react-redux";
import { LeftSideMenu } from "../components/SideList/LeftSideMenu";


export const MyJobs = ({ jobs }) => {
    return (<div>
        <JobsHeader />
        <div className="flex">
            <div className="w-1/6 border-t-2 mt-2 text-base font-thin h-1/2 ml-8  "><LeftSideMenu /> </div>
            <div className="h-1/2 flex-auto ml-4">{ jobs.map(job => <JobListingCard job={job} key={job.id} />)}</div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        jobs: state.allJobs
    })
}

export default connect(mapStateToProps)(MyJobs);