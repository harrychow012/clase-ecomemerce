import SideBar from "./SideBar";

function Profile(props) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 col-12 mb-2">
            <SideBar/>
            </div>
            <div className="col-md-9 col-12 mb-2">
            <div className="card">
              <h4 className="card-header text-center">Actualizar perfil</h4>
              <div className="card-body">
                <form>
                  <div class="mb-3">
                    <label for="firstName" class="form-label">
                      Nombres
                    </label>
                    <input type="text" class="form-control" id="firstName" />
                  </div>
  
                  <div class="mb-3">
                    <label for="lastName" class="form-label">
                      Apellidos
                    </label>
                    <input type="text" class="form-control" id="lastName" />
                  </div>
  
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Nombre Usuario
                    </label>
                    <input type="text" class="form-control" id="username" />
                  </div>
  
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input type="email" class="form-control" id="email" />
                  </div>
  
                  <div class="mb-3">
                    <div className="md-3">
                      <label for="profileImg" class="form-label">
                        Image perfil
                      </label>
                      <input type="file" class="form-control" id="profileImg" />
                    </div>
                  </div>
  
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
  export default Profile;