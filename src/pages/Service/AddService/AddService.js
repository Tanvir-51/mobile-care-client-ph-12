import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    axios.post("http://localhost:5000/addService", data).then((res) => {
      if (res?.data === "already have this id") {
        swal({
          title: "A entry is already inserted with this ID in the Database!",
          icon: "error",
          buttons: true,
          dangerMode: true,
        });
      } else if (res?.data?.insertedId) {
        swal({
          title: "The Service is successfully added",
          icon: "success",
          button: "Ok",
        });
        reset();
      }
    });
  };
  const visibile = {
    visibility: "visible",
  };
  const invisibile = {
    visibility: "hidden",
  };
  return (
    <div>
      <div className="mt-4">
        <div className="row m-0 g-0 justify-content-center my-4">
          <div className=" col-10  shadow-lg rounded-3 p-3 p-sm-4 header-bg ">
            <h3 className="text-center pb-4 ">Add Products</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Id"
                  {...register("id", { required: true })}
                />
                <label htmlFor="floatingName">
                  Service Id (must be unique)
                </label>
                <span
                  style={errors.id ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter a unique id
                </span>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Name"
                  {...register("name", { required: true })}
                />
                <label htmlFor="floatingName">Products Name</label>
                <span
                  style={errors.name ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter an approiate name
                </span>
              </div>
              <div className="form-floating mb-2">
                <select
                  {...register("bodyType", { required: true })}
                  className="form-control"
                >
                  <option value="sedan">Iphone</option>
                  <option value="suv">Samsung</option>
                </select>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter memory space"
                  {...register("memory", { required: true })}
                />
                <label htmlFor="floatingInput">Memory</label>
                <span
                  style={errors.memory ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter Memory Space
                </span>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="number"
                  className="form-control"
                  step="0.01"
                  placeholder="Enter Price"
                  {...register("price", { required: true })}
                />
                <label htmlFor="floatingPhone">Price</label>
                <span
                  style={errors.price ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter the price
                </span>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter image"
                  {...register("img", { required: true })}
                />
                <label htmlFor="floatingPhone">Image Url</label>
                <span
                  style={errors.img ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter the image url
                </span>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add Service"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
