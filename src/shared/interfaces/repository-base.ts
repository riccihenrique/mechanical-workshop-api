export abstract class RepositoryBase<M, E> {
  abstract formatToEntity(data: M): E;
}