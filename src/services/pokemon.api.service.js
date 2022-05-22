/* eslint-disable prettier/prettier */
import http from "../../core/services/pokemon/http-common.api.v2";

export class PokemonApiService {
  getAll() {
    return http.get("/pokemon");
  }
  getAllByRange(min, max) {
    return http.get(`/pokemon?limit=${max}&offset=${min}`);
  }
  getById(id) {
    return http.get(`/pokemon/${id}`);
  }

  create(data) {
    return http.post("/pokemon", data);
  }

  update(id, data) {
    return http.put(`/pokemon/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pokemon/${id}`);
  }

  findByTitle(title) {
    return http.get(`/pokemon?title=${title}`);
  }
}
