function Data({ registrationData }) {
    // console.log(registrationData)
    return (
        <div className="data">
            <div className="data__header">Data</div>
            <div className="divider"></div>
            <div className="data__content">
                <table id="registrationTable" className="data__content__table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>sex</th>
                            <th>email</th>
                            <th>password</th>
                            <th>birthday</th>
                            <th>city</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registrationData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.sex}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>{data.birthday}</td>
                                        <td>{data.city}</td>
                                        <td>{data.message}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Data;