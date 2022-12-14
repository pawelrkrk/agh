import { TodoPresenter } from './todo-presenter';

describe('TodoPresenter', () => {
  it('should create an instance', () => {
    expect(new TodoPresenter()).toBeTruthy();
  });

  it('should add item',()=>{
    let presenter = new TodoPresenter();
    presenter.addItem("test","test");
    expect(presenter.Items.length).toEqual(4);
  });
});
