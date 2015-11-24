// in root nodejs app


var expect = require('chai').expect;
var app = require('../app');
var request = require('supertest');

var agent = request.agent(app);

describe('GET /posts', function(){
  it('should repond with 200 in case of valid request', function(done){
    agent.get('posts')
      .send()
      .end(function(err, res){
        if (err){
          return done(err);
        }
        console.log('response object in user_test.js: ', res);
        var fetchedData = JSON.parse(res.text);
        expect(fetchedData).to.be.an('array');
        expect(fetchedData).to.not.empty;

        var post = fetchedData[0];
        if (post){
          // console.log('post:', post');
          // ook eens fout maken bvb. array veranderen naar object
          expect(post).to.have.all.keys('_v', '_id', 'comments', 'upvotes');
          expect(post.comments).to.be.an('array');
          expect(post.upvotes).to.be.a('number');
        }
        done;
      });
  });
});
