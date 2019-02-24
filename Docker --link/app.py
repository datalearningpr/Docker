import redis
r = redis.Redis(host='redis_test', port=6379)
print(r.keys())
print(r.dbsize())







