import { useCallback, useEffect, useState } from "react";
import { UserApi } from "../../api";
import _ from "lodash";
const UserList = () => {
  const [UserData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  console.log("inputVal", inputVal);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(UserApi);
      let data = await response.json();
      setUserData(data?.carts);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedInputChange = useCallback(
    _.debounce((value) => {
      setInputVal(value);
    }, 1000), // 300ms delay
    []
  );
  // const debouncedInputChange = _.debounce((value) => setInputVal(value), 1000);

  const handleInputValue = (e) => {
    debouncedInputChange(e.target.value);
  };

  const topProducts = UserData.length
    ? UserData.flatMap((cart) => cart.products).slice(0, 10)
    : [];

  const filterData = topProducts.filter((items) => {
    return items.title
      .toLowerCase()
      .trim()
      .includes(inputVal.toLowerCase().trim());
  });

  return (
    <>
      <div className="form-group">
        <label for="exampleInputEmail1">Search</label>
        <input
          type="text"
          className="form-control"
          id="text"
          placeholder="Enter"
          onChange={handleInputValue}
        />
      </div>
      <h1>User List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default UserList;
