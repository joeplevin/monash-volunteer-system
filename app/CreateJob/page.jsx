function CreateJob() {
    return (
        <>
            <h1><center>Job Creation</center></h1>
            <form>
                <label>
                    Job Title: <br />
                    <input type="text" placeholder="Enter job title here"/>

                </label>

                <label>
                <br /><br />
                    Job description:<br />
                    <textarea  name="name" placeholder="Enter job description here" rows={5} cols={50} >
                </textarea>
                </label>

                <br /><br />
                <input type="submit" value="Create job"></input>
                
            </form>
        </>
    )
  }

  export default CreateJob;