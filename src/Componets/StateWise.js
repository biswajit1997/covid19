import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Spinner } from "reactstrap";

function StateWise({ color: color }) {
  const [stateApi, setStateApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then(function (response) {
        console.log(response.data.Odisha.districtData);
        setStateApi(response.data.Odisha.districtData);
      })
      .catch(function (error) {
        console.log("network error");
      });
  }, []);
  return (
    <div className="table-responsive set">
      {stateApi.Angul !== undefined ? (
        <table
          className="table table-bordered table-hover"
          style={{ color: color }}
        >
          <thead>
            <tr style={{ color: color }}>
              <th>Id</th>
              <th>District Name</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr>
                <td>1</td>
                <td>Angul</td>
                <td className="active">{stateApi.Angul.active}</td>
                <td className="confirmed">
                  {stateApi.Angul.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Angul.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Angul.recovered}</td>
                <td className="deceased">{stateApi.Angul.deceased}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Balangir</td>
                <td className="active">{stateApi.Balangir.active}</td>
                <td className="confirmed">
                  {stateApi.Balangir.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Balangir.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Balangir.recovered}</td>
                <td className="deceased">{stateApi.Balangir.deceased}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Balasore</td>
                <td className="active">{stateApi.Balasore.active}</td>
                <td className="confirmed">
                  {stateApi.Balasore.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Balasore.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Balasore.recovered}</td>
                <td className="deceased">{stateApi.Balasore.deceased}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bargarh</td>
                <td className="active">{stateApi.Bargarh.active}</td>
                <td className="confirmed">
                  {stateApi.Bargarh.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Bargarh.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Bargarh.recovered}</td>
                <td className="deceased">{stateApi.Bargarh.deceased}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bhadrak</td>
                <td className="active">{stateApi.Bhadrak.active}</td>
                <td className="confirmed">
                  {stateApi.Bhadrak.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Bhadrak.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Bhadrak.recovered}</td>
                <td className="deceased">{stateApi.Bhadrak.deceased}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Boudh</td>
                <td className="active">{stateApi.Boudh.active}</td>
                <td className="confirmed">
                  {stateApi.Boudh.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Boudh.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Boudh.recovered}</td>
                <td className="deceased">{stateApi.Boudh.deceased}</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Cuttack</td>
                <td className="active">{stateApi.Cuttack.active}</td>
                <td className="confirmed">
                  {stateApi.Cuttack.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Cuttack.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Cuttack.recovered}</td>
                <td className="deceased">{stateApi.Cuttack.deceased}</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Deogarh</td>
                <td className="active">{stateApi.Deogarh.active}</td>
                <td className="confirmed">
                  {stateApi.Deogarh.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Deogarh.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Deogarh.recovered}</td>
                <td className="deceased">{stateApi.Deogarh.deceased}</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Dhenkanal</td>
                <td className="active">{stateApi.Dhenkanal.active}</td>
                <td className="confirmed">
                  {stateApi.Dhenkanal.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Dhenkanal.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Dhenkanal.recovered}</td>
                <td className="deceased">{stateApi.Dhenkanal.deceased}</td>
              </tr>{" "}
              <tr>
                <td>10</td>
                <td>Gajapati</td>
                <td className="active">{stateApi.Gajapati.active}</td>
                <td className="confirmed">
                  {stateApi.Gajapati.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Gajapati.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Gajapati.recovered}</td>
                <td className="deceased">{stateApi.Gajapati.deceased}</td>
              </tr>{" "}
              <tr>
                <td>11</td>
                <td>Ganjam</td>
                <td className="active">{stateApi.Ganjam.active}</td>
                <td className="confirmed">
                  {stateApi.Ganjam.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Ganjam.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Ganjam.recovered}</td>
                <td className="deceased">{stateApi.Ganjam.deceased}</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Jagatsinghpur</td>
                <td className="active">{stateApi.Jagatsinghpur.active}</td>
                <td className="confirmed">
                  {stateApi.Jagatsinghpur.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Jagatsinghpur.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">
                  {stateApi.Jagatsinghpur.recovered}
                </td>
                <td className="deceased">{stateApi.Jagatsinghpur.deceased}</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Jajpur</td>
                <td className="active">{stateApi.Jajpur.active}</td>
                <td className="confirmed">
                  {stateApi.Jajpur.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Jajpur.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Jajpur.recovered}</td>
                <td className="deceased">{stateApi.Jajpur.deceased}</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Jharsuguda</td>
                <td className="active">{stateApi.Jharsuguda.active}</td>
                <td className="confirmed">
                  {stateApi.Jharsuguda.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Jharsuguda.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Jharsuguda.recovered}</td>
                <td className="deceased">{stateApi.Jharsuguda.deceased}</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Kalahandi</td>
                <td className="active">{stateApi.Kalahandi.active}</td>
                <td className="confirmed">
                  {stateApi.Kalahandi.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Kalahandi.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Kalahandi.recovered}</td>
                <td className="deceased">{stateApi.Kalahandi.deceased}</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Kandhamal</td>
                <td className="active">{stateApi.Kandhamal.active}</td>
                <td className="confirmed">
                  {stateApi.Kandhamal.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Kandhamal.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Kandhamal.recovered}</td>
                <td className="deceased">{stateApi.Kandhamal.deceased}</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Kendrapara</td>
                <td className="active">{stateApi.Kendrapara.active}</td>
                <td className="confirmed">
                  {stateApi.Kendrapara.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Kendrapara.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Kendrapara.recovered}</td>
                <td className="deceased">{stateApi.Kendrapara.deceased}</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Kendujhar</td>
                <td className="active">{stateApi.Kendujhar.active}</td>
                <td className="confirmed">
                  {stateApi.Kendujhar.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Kendujhar.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Kendujhar.recovered}</td>
                <td className="deceased">{stateApi.Kendujhar.deceased}</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Khordha</td>
                <td className="active">{stateApi.Khordha.active}</td>
                <td className="confirmed">
                  {stateApi.Khordha.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Khordha.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Khordha.recovered}</td>
                <td className="deceased">{stateApi.Khordha.deceased}</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Koraput</td>
                <td className="active">{stateApi.Koraput.active}</td>
                <td className="confirmed">
                  {stateApi.Koraput.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Koraput.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Koraput.recovered}</td>
                <td className="deceased">{stateApi.Koraput.deceased}</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Malkangiri</td>
                <td className="active">{stateApi.Malkangiri.active}</td>
                <td className="confirmed">
                  {stateApi.Malkangiri.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Malkangiri.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Malkangiri.recovered}</td>
                <td className="deceased">{stateApi.Malkangiri.deceased}</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Mayurbhanj</td>
                <td className="active">{stateApi.Mayurbhanj.active}</td>
                <td className="confirmed">
                  {stateApi.Mayurbhanj.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Mayurbhanj.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Mayurbhanj.recovered}</td>
                <td className="deceased">{stateApi.Mayurbhanj.deceased}</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Nabarangapur</td>
                <td className="active">{stateApi.Nabarangapur.active}</td>
                <td className="confirmed">
                  {stateApi.Nabarangapur.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Nabarangapur.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Nabarangapur.recovered}</td>
                <td className="deceased">{stateApi.Nabarangapur.deceased}</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Nayagarh</td>
                <td className="active">{stateApi.Nayagarh.active}</td>
                <td className="confirmed">
                  {stateApi.Nayagarh.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Nayagarh.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Nayagarh.recovered}</td>
                <td className="deceased">{stateApi.Nayagarh.deceased}</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Nuapada</td>
                <td className="active">{stateApi.Nuapada.active}</td>
                <td className="confirmed">
                  {stateApi.Nuapada.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Nuapada.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Nuapada.recovered}</td>
                <td className="deceased">{stateApi.Nuapada.deceased}</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Puri</td>
                <td className="active">{stateApi.Puri.active}</td>
                <td className="confirmed">
                  {stateApi.Puri.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Puri.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Puri.recovered}</td>
                <td className="deceased">{stateApi.Puri.deceased}</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Rayagada</td>
                <td className="active">{stateApi.Rayagada.active}</td>
                <td className="confirmed">
                  {stateApi.Rayagada.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Rayagada.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Rayagada.recovered}</td>
                <td className="deceased">{stateApi.Rayagada.deceased}</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Sambalpur</td>
                <td className="active">{stateApi.Sambalpur.active}</td>
                <td className="confirmed">
                  {stateApi.Sambalpur.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Sambalpur.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Sambalpur.recovered}</td>
                <td className="deceased">{stateApi.Sambalpur.deceased}</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Subarnapur</td>
                <td className="active">{stateApi.Subarnapur.active}</td>
                <td className="confirmed">
                  {stateApi.Subarnapur.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Subarnapur.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Subarnapur.recovered}</td>
                <td className="deceased">{stateApi.Subarnapur.deceased}</td>
              </tr>
              <tr>
                <td>29</td>
                <td>Sundargarh</td>
                <td className="active">{stateApi.Sundargarh.active}</td>
                <td className="confirmed">
                  {stateApi.Sundargarh.confirmed}
                  <span className="ml-2 addconf">
                    [+{stateApi.Sundargarh.delta.confirmed}]
                  </span>
                </td>
                <td className="recovered">{stateApi.Sundargarh.recovered}</td>
                <td className="deceased">{stateApi.Sundargarh.deceased}</td>
              </tr>
            </>
          </tbody>
        </table>
      ) : (
        <div className="mt-5">
          <Spinner color="success" />
        </div>
      )}
    </div>
  );
}

export default StateWise;
